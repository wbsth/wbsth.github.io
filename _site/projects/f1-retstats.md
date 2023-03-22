---
title: Formula 1 cars retirements data analysis
layout: subpage
tags: ['page', 'project']
modified: 2023-03-12 00:00:00
order: 3
technologies: ['python', 'data science']
eleventyNavigation:
  key: Formula 1 cars retirements data analysis
  parent: Projects
---
<div class="project-page">
  <h2>Data analysis</h2>

  In this project I've analysed data from all Formula 1 races from 1950 until 2019, and plotted few interesting graphs about F1 cars reliability.

  <img src="/images/f1-data-analysis.png"/>

  My direct inspiraction was <a class="hyperlink external" href="https://drivetribe.com/p/bring-back-the-fg-v12-vettel-Lzksx_eGRXKAk6u0hLTYvw?iid=JSIduCH0QsmaohSAsD8ESg">Sebastian Vettel reaction after his Russia 2019 retirement due to engine failure</a>

  I've downloaded data from unofficial F1 API using requests and json library. Then, using <code>bokeh</code>, <code>scipy</code>, <code>pandas</code> I've created few interactive graphs.

  <h2>Links</h2>
  <ul>
    <li><a class="hyperlink external" href="https://github.com/wbsth/f1retstat">Github page</a></li>
      <li><a class="hyperlink external" href="https://wbsth.github.io/f1retstat/mech.html">Online version - Mechanical retirements</a></li>
    <li><a class="hyperlink external" href="https://wbsth.github.io/f1retstat/ov.html">Online version - Overall retirements</a></li>
    <li><a class="hyperlink external" href="https://wbsth.github.io/f1retstat/acc.html">Online version - Accidents retirements</a></li>
  </ul>
</div>