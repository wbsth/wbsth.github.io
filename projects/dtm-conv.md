---
title: Digital Terrain Model converter
layout: subpage
tags: ['page', 'project']
modified: 2022-01-09 00:00:00
order: 3
technologies: ['python', 'data science']
eleventyNavigation:
  key: Digital Terrain Model converter
  parent: Projects
---
<div class="project-page">
  <h1 class="text-lg bold font-bold">Main goals</h1>
  <p>Project involved creating program that would convert Digital Terrain Model files to simplified form that could be used for flight navigation.</p>

  <p>It was achieved by approximating terrain topography with simple 3D figures.</p>

  Main goals:
  <ul class="list-disc">
    <li>reduce the size of the output file</li>
    <li>    preserve details of terrain data</li>
  </ul>

  <img src="/images/dtmconv.png"/>

  <h1 class="text-lg bold font-bold">Results</h1>
  <img src="/images/dtmconv2.png"/>
  <p class="text-center">Source terrain data</p>

  <img src="/images/dtmconv4.png"/>
  <p class="text-center">Terrain data simplified by using cylinders</p>

  <img src="/images/dtmconv3.png"/>
  <p class="text-center">Terrain data simplified by using more complex 3d figures</p>

</div>