({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: '_index.css', ie: false},
        { elem: 'css', url: '_index.ie.css', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_index.js'},
    ],
    content: [
        'block content'
    ]
})
