function initialize() {
    let body = document.getElementsByTagName("body")[0];

    body.addEventListener("mouseleave", () => DotNet.invokeMethodAsync("BlazorBookReviews", "MouseLeave", '8a9cf939-a5c0-4958-8bcf-cc6ae5ce58f6', 'Yep'));
}
