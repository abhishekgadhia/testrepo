  // 1. Get first and last n elements of array
  function getFirstAndLastElements(arr, n) {
    const first = arr.slice(0, n);
    const last = arr.slice(-n);
    return `First ${n} element : [${first}], Last ${n} element : [${last}]`;
  }
  
  // 2. Insert dashes between even digits
  function insertDashes(numStr) {
    return numStr.toString().replace(/([02468])(?=[02468])/g, '$1-');
  }
  
  // 3. Most frequent item in array
  function mostFrequent(arr) {
    let freq = {}, maxCount = 0, maxItem;
    arr.forEach(item => {
      freq[item] = (freq[item] || 0) + 1;
      if (freq[item] > maxCount) {
        maxCount = freq[item];
        maxItem = item;
      }
    });
    return maxItem;
  }
  
  // 4. Shuffle array
  function shuffleArray(arr) {
    return arr.sort(() => 0.5 - Math.random());
  }
  
  // 5. Union, Difference, Intersection
  function arrayOps(a, b) {
    const union = [...new Set([...a, ...b])];
    const a_b = a.filter(x => !b.includes(x));
    const b_a = b.filter(x => !a.includes(x));
    const intersection = a.filter(x => b.includes(x));
    return { union, a_b, b_a, intersection };
  }
  
  // 6. Fill array with stepped values
  function num_string_range(start, end, step) {
    let result = [];
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
      result.push(String.fromCharCode(i));
    }
    return result;
  }
  
  // 7. Get month name from date
  function getMonthName(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString('default', { month: 'long' });
  }
  
  // 8. Difference between dates in y, m, d
  function diffInYMD(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();
  
    if (days < 0) {
      months -= 1;
      days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return `${years} years ${months} months ${days} days`;
  }
  
  // 9. Convert Unix timestamp to readable date
  function unixToReadable(unix) {
    const date = new Date(unix * 1000);
    return date.toString();
  }
  
  // 10. Detailed time difference
  function fullDateDiff(d1, d2) {
    const msDiff = new Date(d2) - new Date(d1);
    const min = Math.floor(msDiff / 60000);
    const hrs = Math.floor(min / 60);
    const days = Math.floor(hrs / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(months / 12);
  
    const leftMonths = months % 12;
    const leftDays = days - (years * 365 + Math.floor(leftMonths * 30.44));
  
    return {
      years: `${years} years ${leftMonths} months ${leftDays} days`,
      months: `${months} months ${leftDays} days`,
      weeks: `${weeks} weeks ${days % 7} days`,
      days: `${days} days`,
      hours: `${hrs} hours`,
      minutes: `${min} minutes`
    };
  }
  
  // 11. Insert string at position
  function insertString(mainStr, strToInsert, pos = 1) {
    return mainStr.slice(0, pos) + strToInsert + mainStr.slice(pos);
  }
  
  // 12. Chop string into chunks
  function stringChop(str, len) {
    let chunks = [];
    for (let i = 0; i < str.length; i += len) {
      chunks.push(str.substr(i, len));
    }
    return chunks;
  }
  
  // 13. Format number with commas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  // 14. Sort array of objects
  function sortPeople(arr) {
    const byAge = [...arr].sort((a, b) => a.age - b.age);
    const byNameDesc = [...arr].sort((a, b) => b.name.localeCompare(a.name));
    return { byAge, byNameDesc };
  }
  
  // 15. Delete or insert in array of objects
  function modifyArray(arr, action, pos, name = "", age = 0) {
    if (action === "delete") {
      if (pos < 0 || pos >= arr.length) return "Invalid delete position";
      arr.splice(pos, 1);
    } else if (action === "insert") {
      if (pos < 0 || pos > arr.length) return "Invalid insert position";
      arr.splice(pos, 0, { name, age });
    }
    return arr;
  }
  
