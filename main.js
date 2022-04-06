// const { app, BrowserWindow, Menu } = require("electron");
const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  window.loadFile("index_prac.html");

  const template = [
    {
      label: "ToDoApp",
      submenu: [{ role: "quit" }],
    },
    {
      label: "Menu",
      submenu: [
        {
          label: "New Background",
          click: () => {
            window.webContents.reloadIgnoringCache();
          },
        },
        {
          type: "separator",
        },
        {
          label: "Reset Preferences",
          click: () => {
            window.webContents.executeJavaScript(`
              localStorage.clear();
              window.location.reload();
              `);
          },
        },
      ],
    },
  ];
  
  const customMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(customMenu);
  
};


app.whenReady().then(() => {
  createWindow();
});
