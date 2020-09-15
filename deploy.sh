npm run build
cd build
tar cvf decom.tar *
scp decom.tar triumph@danieledminster.com:.
ssh triumph@danieledminster.com -t "sudo cp ~/decom.tar /var/www/html/. && sudo tar xvf /var/www/html/decom.tar && sudo rm -rf /var/www/html/decom.tar"
