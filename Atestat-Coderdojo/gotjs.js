const images = ["https://cdn.gencraft.com/prod/user/47ab1900-a9c0-433c-aa17-52e9eaae5bb0/7ad87115-6ed5-4e50-8b2f-db57dc1bc183/images/image0_0_watermark.jpg?Expires=1694257650&Signature=E2QlrrMw3SBkpIaW2K7aynU-kKve96UXjnUqeMs5AQq-F7tV~w7P~2Hb7D6b5ZANMDhDv2kTG55BJFvLQNiaxycoU5MHx80fCameB8xW86-6nHFu3DsubNACCkkdqqySK6dJRbBqTCm-tmzP0B9Gmn5yvYTyYyWppVpM0ZIqZ52Wk~e~7B73aMzSKYrb8~kp7MVMq-0tA7YMB8KQEglzHHUNsgFZ7jQdHnEdqC41mrD0fejmF4Kve0d6p7N22mcBILEnozLXk9rSSbqH0UdqLtIhZnVlOD76lhskGbViV43GutavrEOP0HbAOJCWXZyflKvF9~-Ibhyf6dB0jErLmg__&Key-Pair-Id=K3RDDB1TZ8BHT8", "https://cdn.gencraft.com/prod/user/47ab1900-a9c0-433c-aa17-52e9eaae5bb0/5a138b36-4087-4b8b-8a2e-e5e1a4789e37/images/image0_0_watermark.jpg?Expires=1694258939&Signature=h2tG~q9MfM-4m0lKin2W~KbtUwrWmtHQ4cDRCo2hPg4Rq~Gj2wkB-f22471B9JZ~yIcmyYwCyfkRcYFLhF6VQ1NUSdxzyrxi1g1RMSz8-kFbdE52ITxcrjsdWEkCNbLtsQYuzmqAJQpDTKUgyc07aizsAJsYa9kkXKnyy26WrdJSBJ9wqM96bVltBBMUFk-cNmZdgAB8BBZHJiP5ZC7zj8YfWyWyqEOJOG~oe3obg9Jq1nuwPQIrkYfAeeOyTY-RAK4DpNZE~083o71xMBv3HPQHTseHaZDjV9PbRdhZZKny5fa~rHA~q5ZMM7pYlMg-MtfEfiDUYLp6DZFqBiLkzw__&Key-Pair-Id=K3RDDB1TZ8BHT8","https://cdn.gencraft.com/prod/user/47ab1900-a9c0-433c-aa17-52e9eaae5bb0/0831cca1-344f-4916-8bed-558f16d7ba4f/images/image0_0_watermark.jpg?Expires=1694258951&Signature=UXhU7~h~E0zkjOtRLdKvWdDIoRy0dCM6qpzu1WV4HTaZI-3DLn0oS~g85EfeDxYfuvL-DOJSWdXnUcchw4QAWtZKHJcm5lOw8b~noRCx9elVRlJmR7BtJ9TII6VQDbxUJvyOvCIAVDze~rBaLi5KgAmz-fSuzjpXDME3g8sO1Yk7Klu-yEhsW4TekvsjT1HcvAvBY4vIzIk66C6VhoH7cFQSYQ6nDTmv83NaO798DFHa~XXwaiibW~ugpjZVPftWLFbHgEzqs-85ZupE~qPTIOuqG3eziN9YxxUOfxbalYvADk1HXzX-IzOdhzBHAJL6HLfgVwHaorHlWd~b0EwJTA__&Key-Pair-Id=K3RDDB1TZ8BHT8"]
const carousel=document.querySelector(".carousel");
const interval=setInterval(function() {
    startCarousel();
}, 7000);
var index= 1;



startCarousel=()=>{
    carousel.style.backgroundImage=`url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index>images.length-1) index=0;
}