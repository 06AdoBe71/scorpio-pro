module.exports = async(client) => {
  var oynuyorkısmı = [
  ];
  client.user.setStatus('ONLİNE')
  setInterval(function() {
  //sürekli tekrarlanacak bölüm 
  // 6000 milisaniye yani 6 saniyede bir gerçekleşecek eylem
          client.user.setActivity("s.yardım Ayarlanıyor...", { type: 'PLAYING' });
      }, 2 * 5000);
  
  
  }