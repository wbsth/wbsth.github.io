---
title: Glider flight recorder
layout: subpage
tags: ['page', 'project']
modified: 2023-03-12 00:00:00
order: 3
technologies: ['C', 'embedded', 'STM32']
eleventyNavigation:
  key: Glider flight recorder
  parent: Projects
---
<div class="project-page">
  <h2>Main goals</h2>
  Project involved designing and manufacturing prototype of glider flight recorder with reduced separation detection system.
  Main device goals were to:
  <ul class="list-disc">
    <li>record glider flight data (position, altitude, speed, etc.)</li>
    <li>communicate with other devices using Open Glider Network (OGN)</li>
    <li>warn pilot about potential reduced separation (using sound clues)</li>
  </ul>

  <h2>Hardware</h2>
  I've designed two side PCB using <a class="hyperlink external" href="https://eagle-schematic-program.com/">Eagle</a> software.
  <img src="/images/pcb.png"/>
  Then, ABS case that fits designed board was prepared using <a class="hyperlink external" href="https://eagle-schematic-program.com/">Fusion360</a>.
  <img src="/images/recorder-renders.png"/>
  Renders you can see above were made using <a class="hyperlink external" href="https://www.keyshot.com/">Keyshot</a>.
  
  <h2>Software</h2>
  I've programmed the STM32F103C8T6 microcontroller the device is using, with <a class="hyperlink external" href="https://www.st.com/en/development-tools/stm32cubeide.html">STM32CubeIDE</a> + Hardware Abstraction Layer libraries.
</div>