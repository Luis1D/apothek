{
    "version": 2,
    "name": "apothek",
    "builds": [{ "src": "apothek/package.json", "use": "@now/static-build", "config": {"distDir": "build"} }],
    "routes": [
        { "src": "/(.*)", "dest": "apothek/$1" }
    ]
}