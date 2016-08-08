'use strict';

const showResults = () => {
  const activate = () => {
    return new Promise((resolve, reject) => {
      let date = {};
      JSON.parse(localStorage.getItem('emails')).forEach((row) => {
        date = new Date(row.date);
        document.querySelector('table').innerHTML = document.querySelector('table').innerHTML.concat(
          `
            <tr>
              <td>${row.userEmail}</td>
              <td>${row.input}</td>
              <td>${row.hash.slice(0,8)}</td>
              <td class="text-left">                      ${
                                          date.getUTCHours() < 10 ? '0'+date.getUTCHours() : date.getUTCHours()
                                        }:${
                                          date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
                                        }:${
                                          date.getSeconds() < 10 ? date.getSeconds() : date.getSeconds()
                                        }
                                        <br>
                                         ${
                                          date.getFullYear()
                                        }/${
                                          date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()
                                        }/${
                                          date.getDate() < 10 ? '0'+date.getDate() : date.getDate()
                                        }
                  </td>
            </tr>
          `
        )
      })
    });
  }
  return {
    activate,
  }
}

define(() => showResults())
