function save_options() {
  var url = 'https://api.telegram.org/bot' + document.getElementById('bot_token').value + '/sendmessage?chat_id=' + document.getElementById('chat_id').value + '&text=' + encodeURI('Bot connected.');
    
  chrome.storage.sync.set({
    excludeMergeTicket: document.getElementById('options_exclude_merge_ticket').checked,
    botToken: document.getElementById('bot_token').value,
    chatId: document.getElementById('chat_id').value
  }, function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var response = xmlhttp.responseText; //if you need to do something with the returned value
        }
    }
    xmlhttp.open('GET', url, true);
    xmlhttp.send();

    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    excludeMergeTicket: true,
    botToken: 'Set your telegram bot token',
    chatId: 'Set your telegram chat id'
  }, function(options) {
    document.getElementById('options_exclude_merge_ticket').checked = options.excludeMergeTicket;
    document.getElementById('bot_token').value = options.botToken;
    document.getElementById('chat_id').value = options.chatId;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);