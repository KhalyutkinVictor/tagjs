// Tagjs
// Author: Khalyutkin Victor
// Version: 0.1.0 (first steps)

let Tag = new Proxy({}, {
    get(target, prop) {
        return (prop => (options = {}) => {            
            if (!(options instanceof Object)) {
                throw 'Bad options';
            }
            let el = document.createElement(prop);
            let processNestedObjects = (el, data, name, func = (el, name, data, key) => el[name][key] = data[key]) => {
                for (let key of Object.keys(data)) {
                    func(el, name, data, key);
                }
            };
            for (let name of Object.keys(options)) {
                if (name == 'attributes' && options[name] instanceof Object) {
                    processNestedObjects(el, options[name], name, (el, name, data, key) => el.setAttribute(key, data[key]))
                    continue;
                }
                if (name == 'dataset' && options[name] instanceof Object) {
                    processNestedObjects(el, options[name], name);
                    continue;
                }
                if (name == 'parent' && options[name] instanceof Element) {
                    options[name].append(el);
                    continue;
                }
                if (name == 'children' && options[name] instanceof Array) {
                    processNestedObjects(el, options[name], name, (el, name, data, key) => (data[key] instanceof Element) ? el.append(data[key]) : null);
                    continue;
                }
                if (name == 'style' && options[name] instanceof Object) {
                    processNestedObjects(el, options[name], name);
                    continue;
                }
                el[name] = options[name];
            }
            return el;
        })(prop);
    }
});