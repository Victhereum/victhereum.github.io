var url =
  "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?58882";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#4dc247",
    ctaText: "",
    borderRadius: "25",
    marginLeft: "0",
    marginBottom: "50",
    marginRight: "50",
    position: "right",
  },
  brandSetting: {
    brandName: "Victhereum",
    brandSubTitle: "Python Backend Engineer | I can design and build any backend infra",
    brandImg: "",
    welcomeText:
      "Hi there!\nYour project requires the best hands and mind, \n let's talk about it",
    messageText: "Hello, I have a question about {{page_link}}",
    backgroundColor: "#0a1a02",
    ctaText: "Let's build",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "2348110258156",
  },
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
