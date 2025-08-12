(function () {
  const qs = new URLSearchParams(location.search);
  const key = "site.theme";
  const themeParam = qs.get("theme");
  const stored = localStorage.getItem(key);
  const initial = themeParam || stored || "cool";

  const applyTheme = (name) => {
    document.documentElement.setAttribute("data-theme", name);
    localStorage.setItem(key, name);
  };

  applyTheme(initial);

  window.SiteTheme = {
    set: applyTheme,
    toggle: () => applyTheme(document.documentElement.getAttribute("data-theme") === "warm" ? "cool" : "warm"),
    get: () => document.documentElement.getAttribute("data-theme"),
  };
})();