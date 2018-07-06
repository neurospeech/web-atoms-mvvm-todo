// tslint:disable

        declare var SystemJS: any;

        export class AddIconAsync {

            public static url(): Promise<string> {
                return new Promise(
                    (resolve, reject) => {
                        SystemJS.import("AddIcon")
                            .then((m) => {
                                resolve(m["AddIcon"].url());
                            }).catch((r) => {
                                reject(r);
                            });
                    }
                );
            }
        }
        