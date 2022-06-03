# Installing and configuring Apache on Arch Linux
Docs: https://wiki.archlinux.org/title/XAMPP 

 1. Install xampp via AUR
 2. Change, in the configuration file located in */opt/lampp/etc/httpd.conf*, the following lines and change accordingly:

 ```bash
  DocumentRoot "folder/with/the/files/that/will/run/on/the/server"
  <Directory "folder/with/the/files/that/will/run/on/the/server"
```

Search for lines:

```bash
<IfModule unixd_module>

  ...  
  ...
    User daemon
    Group daemon
</IfModule>
```
And change it as follows:

```bash
User yourUsername
Group yourGroup
```
To find out your user's group, use the command _group yourUsername
3. Start xampp with *sudo /opt/lampp/manager-linux-x64.run*
4. Start apache via the xampp gui
5. Access 127.0.0.1 to test it