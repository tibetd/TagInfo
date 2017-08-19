function aa()
{
	for (var k=0;k<document.getElementsByTagName("DIV").length;k++)
	{
		if (document.getElementsByTagName("DIV")[k].className=="w3-example")
		{
			document.getElementsByTagName("DIV")[k].style.display="none";
		}
	}
}
