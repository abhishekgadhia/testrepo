function isValidEmail(email) {
    const pattern = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
    return pattern.test(email);
}

function hideEmail(email) {
    const [local, domain] = email.split('@');
    if (local.length <= 2) return '*'.repeat(local.length) + '@' + domain;
  
    const first = local[0];
    const last = local[local.length - 1];
    const stars = '*'.repeat(local.length - 2);
    return `${first}${stars}${last}@${domain}`;
}

function stripTags(input) {
    return input.replace(/<[^>]*>/g, '');
}

function createTable(rows, cols) {
    let table = '<table border="1" cellpadding="5">';
    for (let i = 0; i < rows; i++) {
      table += '<tr>';
      for (let j = 0; j < cols; j++) {
        table += `<td>Row-${i} Column-${j}</td>`;
      }
      table += '</tr>';
    }
    table += '</table>';
    return table;
}


///////////


function groupBySports(players) {
    const sportGroups = {};
  
    players.forEach(player => {
      player.Sports.forEach(sport => {
        if (!sportGroups[sport]) {
          sportGroups[sport] = [];
        }
        sportGroups[sport].push(player.Name);
      });
    });
  
    // Convert to array of objects as required
    return Object.entries(sportGroups).map(([sport, names]) => ({
      [sport]: names
    }));
  }
  
