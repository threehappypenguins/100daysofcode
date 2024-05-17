<h1>Day 1 - MongoDB Installation</h1>
<h3>Install MongoDB on your local machine</h3>

This assumes the OS is Debian-based. I am using Ubuntu.

```console
curl -fsSL https://www.mongodb.org/static/pgp/server-5.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod #enables MongoDB to start on boot
sudo systemctl status mongod #ctrl+c to close
```