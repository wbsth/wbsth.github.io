---
title: Formula 1 cars retirements data analysis
layout: subpage
tags: ['page', 'project']
modified: 2022-01-09 00:00:00
order: 3
technologies: ['python', 'data science']
eleventyNavigation:
  key: Formula 1 cars retirements data analysis
  parent: Projects
---
<div class="project-page">
  <a class="hyperlink external" href="https://github.com/wbsth/f1retstat">Github page</a>

  In this project I've analysed data from all Formula 1 races from 1950 until 2019, and plotted few interesting graphs about F1 cars reliability.

  <img src="/images/f1-data-analysis.png"/>

  My direct inspiraction was <a class="hyperlink external" href="https://drivetribe.com/p/bring-back-the-fg-v12-vettel-Lzksx_eGRXKAk6u0hLTYvw?iid=JSIduCH0QsmaohSAsD8ESg">Sebastian Vettel reaction after his Russia 2019 retirement due to engine failure</a>

  I've downloaded data from unofficial F1 API using requests and json library. Then, using <code>bokeh</code>, <code>scipy</code>, <code>pandas</code> I've created few interactive graphs.

  Interactive version available here:
  <ul class="list-disc">
    <li><a class="hyperlink external" href="https://wbsth.github.io/f1retstat/mech.html">Mechanical retirements</a></li>
    <li><a class="hyperlink external" href="https://wbsth.github.io/f1retstat/ov.html">Overall retirements</a></li>
    <li><a class="hyperlink external" href="https://wbsth.github.io/f1retstat/acc.html">Accidents retirements</a></li>
  </ul>



</div>