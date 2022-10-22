# gnome-clutter-issues

Some people reported weird artifacts, windows flashing back and forth, significant lag in context menus, when using the Gnome [Bedtime Mode](https://github.com/ionutbortis/gnome-bedtime-mode) extension.

This is a small test Gnome Extension that was created in order to reproduce some Clutter Effects issues that appear on some graphics cards (see this [issue](https://github.com/ionutbortis/gnome-bedtime-mode/issues/33)).

The [code](https://github.com/ionutbortis/gnome-clutter-issues/tree/main/src) is very simple.

In the [extension.js](https://github.com/ionutbortis/gnome-clutter-issues/blob/main/src/extension.js) file we just add a new `Clutter.DesaturateEffect` with 100% factor to the main ui group, when the extension is enabled. We remove the effect when the extension is disabled.

This way we can observe any display issues that might occur when using these kind of Clutter effects inside Gnome extensions.

# How to install this test extension?

Steps:

- Open a terminal and run this command:

```
git --version
```

If you get an output like this, the you are fine and can proceed further:

```
[ionut@fedora ~]$ git --version
git version 2.37.3
```

If you get the `Command 'git' not found` error, then you need to install the 'git' package:

```
# On Ubuntu:
sudo apt-get install git

# On Fedora:
sudo dnf install git
```

- Clone this git repo to your local computer where you are experiencing issues with the Bedtime Mode extension.

Run these commands inside the terminal:

```
cd ~ && git clone https://github.com/ionutbortis/gnome-clutter-issues.git

cd gnome-clutter-issues && ./build.sh

rm -rf ~/gnome-clutter-issues
```

- Log out from your Gnome session and log in again.

- Open your preffered Gnome Extensions app (Extensions, Extension Manager) and enable the "Clutter Effects Issues" extension.

Alternatively, you can do this from command line:

```
gnome-extensions enable clutter-issues@ionutbortis.gmail.com

# And to disable it:
gnome-extensions disable clutter-issues@ionutbortis.gmail.com
```

- Your Gnome shell should be now in grayscale and you should play around to see if any visual artifatcs or other display problems occur.
