document.addEventListener("DOMContentLoaded", function () {
    // Create a new HTML5 Canvas context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    // Handle image upload
    const imageUpload = document.getElementById("imageUpload");
    imageUpload.addEventListener("change", function (e) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function (f) {
        const data = f.target.result;
  
        const img = new Image();
        img.onload = function () {
          // Set the canvas dimensions to match the uploaded image
          canvas.width = img.width;
          canvas.height = img.height;
  
          // Draw the uploaded image onto the canvas
          ctx.drawImage(img, 0, 0);
        };
  
        img.src = data;
      };
  
      reader.readAsDataURL(file);
    });
  
    // Add text to the canvas
    function addText() {
        alert('hello')
      const text = document.getElementById("textInput").value;
      const fontSize = parseInt(document.getElementById("fontSizeInput").value);
      const textColor = document.getElementById("colorInput").value;
  
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = textColor;
      ctx.fillText(text, 50, 50);
    }
  
    // Embed an image onto the canvas
    function embedImage() {
      const embeddedImg = new Image();
      embeddedImg.onload = function () {
        ctx.drawImage(embeddedImg, 100, 100, 200, 200);
      };
      embeddedImg.src = "path/to/your/embedded/image.jpg";
    }
  
    // Register event listeners for adding text and embedding image
    document.getElementById("addTextButton").addEventListener("click", addText);
    document.getElementById("embedImageButton").addEventListener("click", embedImage);
  });
  