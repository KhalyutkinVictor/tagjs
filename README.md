# Tagjs
### Create DOM elements simply

---

### Examples

- Create div with classes
```
let div = Tag.div({
    className: 'link link-small'
});
```

- Create div add classes and styles then append to body
```
let bitMoreComplicatedDiv = Tag.div({
    parent: document.body,
    style: {
        width: '100px',    
        height: '100px',
        background: 'red'
    },
    className: 'link link-small'
});
```

- Create div as above and add child button tag
```
let superComplicatedDiv = Tag.div({
    parent: document.body,
    style: {
        width: '100px',    
        height: '100px',
        background: 'red'
    },
    className: 'link link-small',
    children: [
        Tag.button({
            innerText: 'click'
        })
    ]
});
```

- Most complicated example
```
let ultraSuperComplicated = Tag.div({
    parent: document.body,
    style: {
        width: '100px',    
        height: '100px',
        background: 'red'
    },
    className: 'link link-small',
    children: [
        Tag.button({
            innerText: 'click'
        }),
        Tag.div({
            className: 'main-wrap dark',
            attributes: {
                contenteditable: true,
                'data-check': 'works'
            },
            dataset: {
                id: 12,
                ready: true
            }
        })
    ]
});
```
