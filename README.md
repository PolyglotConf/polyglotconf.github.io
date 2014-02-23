# Layout

```
_harp/  
```
The site source code. Run the harp server here. Edit files here.

```
*
```
Everything else in the root directory is the compiled output of _harp. These are the deployable assets. They live at the root of the repo because this is the requirement of our deploy target, GitHub pages.


# Install

## Install harp

harp docs: http://harpjs.com/docs/environment/install


# Develop

## Run the harp server

```
sudo harp server _harp -p 80
```

## Do work

Modify source files in _harp/


# Deploy

harp docs: http://harpjs.com/docs/deployment/github-pages

## Compile

```
harp compile _harp ./
```

## Commit and push

For org pages, push to `master`. For project pages, push to `gh-pages`.