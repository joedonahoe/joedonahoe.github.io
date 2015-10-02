// stolen from http://stackoverflow.com/questions/4644673/hide-all-elements-with-class-using-plain-javascript
function showHide()
{
	var classSelected = getQueryVariable('search');

	if( !classSelected )
	{
		// do nothing.
	}
	else
	{
		// hide everything.
		var allClasses = document.querySelectorAll('.blogitem');
		var allLength = allClasses.length;
		for( var i=0; i<allLength; i++ )
		{
			allClasses[i].style.display = 'none';
		}

		// display the searched entries.
		var searchClasses = document.querySelectorAll('.'+classSelected);
		var searchLength = searchClasses.length;
		for( var i=0; i<searchLength; i++ )
		{
			searchClasses[i].style.display = 'block';
		}
	}

	return(false);
}

// FROM https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");

	for (var i=0;i<vars.length;i++)
	{
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}

	return(false);
}