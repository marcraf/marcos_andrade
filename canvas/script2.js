
      function filtros(){  
            var largura = 600;
            var altura = 500;

            var quadro = document.getElementById("quadro2");
            quadro.setAttribute("width", largura);
            quadro.setAttribute("height", altura);

            var ctx = quadro.getContext("2d");        
 var img = new Image();
img.src = 'logo.jpg';


img.onload = function(){
ctx.scale(0.5, 0.5)
		ctx.drawImage(img,0,0);
		ctx.drawImage(img,img.width,0);
		ctx.drawImage(img,0,img.height);
		ctx.drawImage(img,img.width,img.height);
		var imageData = ctx.getImageData(0,0, img.width * 0.5, img.height * 0.5);
		var dataArray = imageData.data;
		
		for (var i = 0; i < dataArray.length; i+=4) {
			
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			
			var blackAndWhite = red + green + blue / 3 - 50;
			
			dataArray[i] 	= 1 * red;
			dataArray[i+1]	= 1 * green;
			dataArray[i+2]	= 0.2 * blue;
			dataArray[i+3]	= 1 * alpha;
		}
		
		ctx.putImageData(imageData,0,0);
		
		var imageData = ctx.getImageData(img.width * 0.5,0, img.width * 0.5, img.height * 0.5);
		var dataArray = imageData.data;
		
		for (var i = 0; i < dataArray.length; i+=4) {
			
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			
			var blackAndWhite = red + green + blue / 3 - 50;
			
			dataArray[i] 	= 1 * red;
			dataArray[i+1]	= 1 * green;
			dataArray[i+2]	= 1 * blue;
			dataArray[i+3]	= 1000000000 * alpha;
		}
		
		ctx.putImageData(imageData,img.width * 0.5,0);
		
		var imageData = ctx.getImageData(0,img.height * 0.5, img.width * 0.5, img.height * 0.5);
		var dataArray = imageData.data;
		
		for (var i = 0; i < dataArray.length; i+=4) {
			
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			
			var blackAndWhite = red + green + blue / 3 - 50;
			
			dataArray[i] 	= 0.2 * red;
			dataArray[i+1]	= 0.2 * green;
			dataArray[i+2]	= 1 * blue;
			dataArray[i+3]	= 1 * alpha;
		}
		
		ctx.putImageData(imageData,0,img.height * 0.5);
		
		var imageData = ctx.getImageData(img.width * 0.5,img.height * 0.5, img.width * 0.5, img.height * 0.5);
		var dataArray = imageData.data;
		
		for (var i = 0; i < dataArray.length; i+=4) {
			
			var red 	= dataArray[i];
			var green	= dataArray[i+1];
			var blue	= dataArray[i+2];
			var alpha	= dataArray[i+3];
			
			var blackAndWhite = red + green + blue /  50;
			
			dataArray[i] 	= blackAndWhite;
			dataArray[i+1]	= blackAndWhite;
			dataArray[i+2]	= blackAndWhite;
			dataArray[i+3]	= 1 * alpha;
		}
		
		ctx.putImageData(imageData,img.width * 0.5,img.height * 0.5);
		
	};
        

      }


         
    
    window.onload =filtros;