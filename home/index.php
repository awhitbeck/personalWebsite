
<html>

  <head>
    <title>Andrew J. Whitbeck </title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
    <link href="myStyle.css" rel="stylesheet" type="text/css">
    <script src="d3.v3.min.js"></script>
  </head>

  <body>

    <div class="center-panel">

      <div class="heading">
	<img src="ZZ4muEventDisplay.png" align="left" height=190>
	<myStyle class="name">    Andrew J. Whitbeck </myStyle><br>

      </div>

      <?php
	 
	 $test= $_GET['content'];
	 
	 if ($test == "")
	 $test="home";

	 print "<div class='link-bar'>";
	 if($test=="home"){
	   print "  <a style='color:#DE591F;' href='index.php?content=home'>Home</a>";
	 }else{
	   print "  <a href='index.php?content=home'>Home</a>";
	 }
	 if($test=="research"){
	   print "  <a style='color:#DE591F;' href='index.php?content=research'>Research</a>";
	 }else{
	   print "  <a href='index.php?content=research'>Research</a>";
	 }
	 if($test=="publications"){
	   print "  <a style='color:#DE591F;' href='index.php?content=publications'>Publications</a>";
	 }else{
	   print "  <a href='index.php?content=publications'>Publications</a>";
	 }
	 if($test=="presentations"){
	   print "  <a style='color:#DE591F;' href='index.php?content=presentations'>Presentations</a>";
	 }else{
	   print "  <a href='index.php?content=presentations'>Presentations</a>";
	 }
	 if(strpos($test,"outreach")!==false){
	   print "  <a style='color:#DE591F;' href='index.php?content=outreach'>Outreach/Projects</a>";
	 }else{
	   print "  <a href='index.php?content=outreach'>Outreach/Projects</a>";	 
	 }
	 if(strpos($test,"news")!==false){
	   print "  <a style='color:#DE591F;' href='index.php?content=news'>Media</a>";
	 }else{
	   print "  <a href='index.php?content=news'>Media</a>";	 
	 }
	 
	 //print "  <a href='https://www.pha.jhu.edu/~whitbeck/temp/myCV/myCV.pdf' target='_blank'>Curriculum Vitae</a>";	 
	 
	 if($test=="contact"){
	   print "  <a style='color:#DE591F;' href='index.php?content=contact'>Contact</a>";
	 }else{
	   print "  <a href='index.php?content=contact'>Contact</a>";
	 }

	 print "</div>";

	 
	 if($test!="outreach"){
	   print "<div class='content'>";
	 }
	 readfile($test.".html");	 
	 if($test!="outreach"){
	   print "  <br class='clear' />";
	   print "</div>";
	 }

	 ?>
	
    </div>

  </body>


</html>
