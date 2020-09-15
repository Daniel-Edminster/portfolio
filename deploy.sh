echo -e "\e[91mBuilding...\e[39m" 
npm run build 
cd build
echo -e "\e[91mTarballing...\e[39m"
tar cvf decom.tar * 
echo -e "\e[91mSending to production server...\e[39m"
scp decom.tar triumph@danieledminster.com:.
ssh triumph@danieledminster.com -t "sudo cp /home/triumph/decom.tar /var/www/html/. && cd /var/www/html && sudo tar xvf decom.tar && sudo rm -rf /var/www/html/decom.tar"
