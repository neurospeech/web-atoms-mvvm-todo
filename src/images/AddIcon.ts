// tslint:disable

        declare var SystemJS: any;

        export class AddIcon {

            private static mContentUrl: string = null;
            private static get contentUrl(): string {
                if (AddIcon.mContentUrl) {
                    return AddIcon.mContentUrl;
                }
                return AddIcon.mContentUrl =
                    "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6"+
		"IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246"+
		"IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci"+
		"IHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlk"+
		"PSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjcuOTYzIDI3Ljk2MyIgc3R5bGU9"+
		"ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjcuOTYzIDI3Ljk2MzsiIHhtbDpzcGFjZT0icHJlc2Vy"+
		"dmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+DQo8Zz4NCgk8ZyBpZD0iYzE0MF9feDJCXyI+"+
		"DQoJCTxwYXRoIGQ9Ik0xMy45OCwwQzYuMjU5LDAsMCw2LjI2LDAsMTMuOTgyczYuMjU5LDEzLjk4MSwx"+
		"My45OCwxMy45ODFjNy43MjUsMCwxMy45ODMtNi4yNiwxMy45ODMtMTMuOTgxICAgIEMyNy45NjMsNi4y"+
		"NiwyMS43MDUsMCwxMy45OCwweiBNMjEuMTAyLDE2LjA1OWgtNC45Mzl2NS4wNDJoLTQuMjk5di01LjA0"+
		"Mkg2Ljg2MlYxMS43Nmg1LjAwMXYtNC45aDQuMjk5djQuOWg0LjkzOXY0LjI5OUgyMS4xMDJ6ICAgICIg"+
		"ZmlsbD0iI0Q4MDAyNyIvPg0KCTwvZz4NCgk8ZyBpZD0iQ2FwYV8xXzlfIj4NCgk8L2c+DQo8L2c+DQo8"+
		"L3N2Zz4NCg==";
            }

            public static get url(): string {
                return `data:image/svg+xml;base64,${AddIcon.contentUrl}`;
            }
        }
        