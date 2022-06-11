/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const promiseModuleFileSystemAccess = import("./FileSystemAccess.mjs")
promiseModuleFileSystemAccess.catch(function (err) {
  console.error(err);
});

const promiseLoad = new Promise(function (resolve, reject) {
  window.addEventListener("load", function (evt) {
    resolve(evt);
  });
});

Promise.all( [ promiseModuleFileSystemAccess, promiseLoad ] ).then(function ( [ moduleFileSystemAccess, evtLoad ]) {
  console.log(moduleFileSystemAccess);
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.innerHTML = "Loaded";
  const btnRandomValues = document.createElement("button");
  btnRandomValues.innerHTML = "Get Folder";
  btnRandomValues.addEventListener("click", function (evt) {
    moduleFileSystemAccess.getOpenFolderDialog();
  });
  document.body.appendChild(btnRandomValues);
});
