import ghpages from "gh-pages";

ghpages.publish("dist", { dotfiles: true }, function (err) {
  if (err) {
    console.error("❌ Deployment failed:", err);
  } else {
    console.log("🚀 Deployed successfully!");
  }
});
