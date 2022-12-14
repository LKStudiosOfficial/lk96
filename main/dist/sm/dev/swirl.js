//!wrt $BSPEC:{"icn":"mime/exec","cpr":"LK Studios","dsc":"A message app","frn":"Swirl","ver":1}

const { Theme } = w96.ui;

class SwirlApp extends WApplication {
    /**
     * Application constructor.
     */
    constructor() {
        super();
    }
    
    /**
     * Main entry point.
     * @param {String[]} argv The program arguments.
     */
    async main(argv) {
        // Create the window
        const mainwnd = this.createWindow({
            title: "Swirl Messaging", // title of the window.
            body: `
              <h1>
                <b>Swirl</b> Messaging
              </h1>
            `, // The app content
            bodyClass: "swirl-app", // html Class of the window
            taskbar: true,
            resizable: true,
            initialHeight: 1920, 
            initialWidth: 1080,
            icon: await Theme.getIconUrl("mime/executable", '16x16')
        }, true);

        // Code here:

        // Store the body of the window in a var:
        let body = mainwnd.getBodyContainer();
        
        // Change the body HTML
        // body.innerHTML = "Changed";

        // Show the window
        mainwnd.show();
    }
}

return await WApplication.execAsync(new SwirlApp(), this.boxedEnv.args);