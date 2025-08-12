<script setup lang="tsx">
</script>

<template>
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">istSOS.</a>
  </div>
<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-accent drawer-button">OGC SensorThings API Demos</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
       

      <li><a  class="link link-accent" href="https://fraunhoferiosb.github.io/FROST-Server/">FROST®-Server</a></li>
      <li><a><button class="btn btn-outline btn-success">Sandbox</button></a></li>
      <li><a><button class="btn btn-outline btn-success">Air quality</button></a></li>
      <li><a><button class="btn btn-outline btn-success">Demography</button></a></li>
      <li><a><button class="btn btn-outline btn-success">Smart Cities</button></a></li>

      <br></br>
      
      <li><a  class="link link-accent" href="https://fraunhoferiosb.github.io/FROST-Server/">BGS Sensors API</a></li>
      <li><a><button class="btn btn-outline btn-accent">Groundwater data</button></a></li>
        
       <br></br>
  
      <li><a  class="link link-accent" href="https://fraunhoferiosb.github.io/FROST-Server/">USGS Water Data Labs</a></li>
      <li><a><button class="btn btn-outline btn-accent">Surface, Atmospheric, and Groundwater data</button></a></li>
      
      <br></br>
      
      <li><a  class="link link-accent" href="https://fraunhoferiosb.github.io/FROST-Server/">New Mexico Bureau of Geology and Mineral Resources </a></li>
      <li><a><button class="btn btn-outline btn-accent">Groundwater quantity and quality data</button></a></li>
      <li><a><button class="btn btn-outline btn-accent">Drinking water quality</button></a></li>

    </ul>
  </div>
</div>
  <div class="flex gap-2">
    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">Admin</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</template>
