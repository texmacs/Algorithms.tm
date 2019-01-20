<TeXmacs|1.99.8>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|algorithms|1.0>

      <src-purpose|Style files for the book Algorithms>
    </src-title>
  </active*>

  <assign|chapter-title|<macro|name|<style-with|src-compact|none|<new-dpage*><no-indent><new-line><no-indent><vspace*|5fn><with|color|blue|math-font-series|bold|font-series|bold|<really-huge|<arg|name>>><vspace|2fn><no-page-break><no-indent*>>>>

  \;

  <assign|section|<\macro|title>
    <assign|section-numbered|<compound|section-display-numbers>><assign|section-prefix|<macro|<compound|the-section>.>><compound|next-section><compound|section-clean><compound|section-header|<arg|title>><compound|section-toc|<arg|title>><with|color|blue|<if|<value|section-numbered>|<compound|section-numbered-title|<arg|title>>|<compound|section-title|<arg|title>>>>
  </macro>>
</body>