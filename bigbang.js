const fs = require('fs');

var array = [];
			
			for(let i=1; i<=100; i++)
			{
				if((i % 3 == 0) && (i % 5 == 0))
				{
					array.push("BIGBANG");
				}
				else if(i % 3 == 0)
				{
					array.push("BIG");
				}
				else if(i % 5 == 0)
				{
					array.push("BANG");
				}
				else
				{
					array.push(i.toString());
				}
			}
			var jsonString = JSON.stringify(array);

fs.writeFile("output.json", jsonString, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File saved!");
  }
});