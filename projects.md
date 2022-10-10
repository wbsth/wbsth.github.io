---
title: Projects
layout: subpage
tags: ['page', 'navitem']
order: 1
eleventyNavigation:
  key: Projects
  parent: Home
---
<p class>Some of my non-work projects I've done in my free time:</p>

<table class="mt-4">
  <thead>
    <tr>
      <th>Project</th>
      <th>Technologies</th>
    </tr>
  </thead>
  {% for project in collections.projects %}
  <tr>
    <td>
      <a class="hyperlink" href={{ project.url }}>{{ project.data.title }}</a>
    </td>
    <td>{% for tech in project.data.technologies %}<code class="code mx-1">{{ tech }}</code>{% endfor %}
    </td>
  </tr>
  {% endfor %}




</table>
