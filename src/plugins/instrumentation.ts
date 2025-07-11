import {ATTR_SERVICE_NAME} from "@opentelemetry/semantic-conventions";
import {WebTracerProvider, BatchSpanProcessor, ConsoleSpanExporter} from "@opentelemetry/sdk-trace-web";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {OTLPTraceExporter} from "@opentelemetry/exporter-trace-otlp-proto";
import {ZoneContextManager} from "@opentelemetry/context-zone";
import {getWebAutoInstrumentations} from "@opentelemetry/auto-instrumentations-web";
import {registerInstrumentations} from "@opentelemetry/instrumentation";


registerInstrumentations({
    instrumentations: getWebAutoInstrumentations({
      "@opentelemetry/instrumentation-fetch": {
        propagateTraceHeaderCorsUrls: [new RegExp(`\\/api\\/*`)],
      }
    }),
  });

function initializeTelemetry(otlpUrl: string, headers: Record<string, string>, resourceAttributes: Record<string, string>, serviceName: string) {
  resourceAttributes[ATTR_SERVICE_NAME] = serviceName;
  const provider = new WebTracerProvider({
    resource: resourceFromAttributes(resourceAttributes),
    spanProcessors: [
      new BatchSpanProcessor(new ConsoleSpanExporter()),
      new BatchSpanProcessor(new OTLPTraceExporter({url: `${otlpUrl}/v1/traces`, headers}))
    ]
  });
    provider.register({
    // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
    contextManager: new ZoneContextManager(),
    });
}

export default defineNuxtPlugin({
  name: 'opentelemetry-plugin',
  async setup() {
    const config = useRuntimeConfig();
    const { otel } = config.public;
    
    if (otel?.exporterOtlpEndpoint && otel?.exporterOtlpHeaders && otel?.resourceAttributes && otel?.serviceName) {
      initializeTelemetry(
        otel.exporterOtlpEndpoint,
        parseDelimitedValues(otel.exporterOtlpHeaders),
        parseDelimitedValues(otel.resourceAttributes),
        otel.serviceName
      );
    }
  }
})

function parseDelimitedValues(s: string): Record<string, string> {
  const headers = s.split(",");
  const result: Record<string, string> = {};

  headers.forEach((header) => {
    const [key, value] = header.split("=");
    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}
