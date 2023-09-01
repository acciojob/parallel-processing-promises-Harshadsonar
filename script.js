//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download and display images
async function downloadAndDisplayImages() {
	for(const image of images) {
	try	{
			const response = await fetch(image.url);
		if(response.ok) {
			const imageUrl = URL.createObjectURL(await response.blob());
			const imgElement = document.createElement("img");
			imgElement.src = imageUrl;;
			
		}else {
			throw new Error(`Failed to load image's URL: ${image.url}`);
		}
		} catch (error){
		console.log(error);
		}
	}
}

btn.addEventListener("click",downloadAndDisplayImages );
