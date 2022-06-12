/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

if (!('showOpenFilePicker' in window && 'showSaveFilePicker' in window && 'showDirectoryPicker' in window)) {
  throw new Error("Module can not load");
}

// Allows the user to select which files to open
// Must be called from a user-initiated event
// Return: (Promise, resolves to Array of FileSystemFileHandle) Handles of the files selected by the user
export function showOpenFilePicker(options) {
  window.showOpenFilePicker(options);
}

// Allows the user to select which files to save to
// Must be called from a user-initiated event
// Return: (Promise, resolves to FileSystemFileHandle) Handle of the file selected by the user
export function showSaveFilePicker(options) {
  window.showSaveFilePicker(options);
}

// Allows the user to select which directory to open
// Must be called from a user-initiated event
// Return: (Promise, resolves to FileSystemDirectoryHandle) Handle of the directory selected by the user
export function showDirectoryPicker(options) {
  window.showDirectoryPicker(options);
}

// Compares two handles to see if the associated entries (either a file or directory) match.
// fileHandle, fileHandle2: (FileSystemHandle)
// Return: (Boolean) Indicates whether the handles match
export function isSameEntry(fileSysHandle, fileSysHandle2) {
  return fileSysHandle.isSameEntry(fileSysHandle2);
}

// Queries the current permission state of the current handle.
// fileHandle: (FileSystemHandle)
// desc: permission descriptor
//   'mode': Can be either 'read' or 'readwrite'. 
// Return: (String) one of 'granted', 'denied' or 'prompt'.
export function queryPermission(fileSysHandle, desc) {
  fileSysHandle.queryPermission(desc);
}

// Requests read or readwrite permissions for the file handle.
// fileHandle: (FileSystemHandle)
// desc: permission descriptor
//   'mode': Can be either 'read' or 'readwrite'. 
// Return: (String) one of 'granted', 'denied' or 'prompt'.
export function requestPermission(fileSysHandle) {
  fileSysHandle.requestPermission(desc);
}

// Returns: (Promise, resolves to File) object representing the state on disk of the entry represented by the handle.
export function getFile(fileHandle) {
  return fileHandle.getFile();
}

// options: 
//   keepExistingData: If false or not specified, the temporary file starts out empty, otherwise the existing file is first copied to this temporary file.
// Returns: (Promise, resolves to FileSystemWritableFileStream) a newly created object that can be used to write to a file.
export function createWritable(fileHandle, options) {
  return fileHandle.createWritable(options);
}


// Returns: (async iterator) new iterator of a given object's own enumerable property [key, value] pairs
export function entries(directoryHandle) {
  return directoryHandle.entries();
}

// name: (String) representing the FileSystemHandle.name of the file you wish to retrieve.
// options: (Optional, object) with the following properties:
//   create: (Boolean, optional) Default false. When set to true if the file is not found, one with the specified name will be created and returned.
// Returns: (Promise, fulfilled with FileSystemFileHandle) a file with the specified name, within the directory the method is called.
FileSystemDirectoryHandle.getFileHandle(directoryHandle, name, options) {
  return directoryHandle.getFileHandle(name, options);
}

// name: (String) representing the FileSystemHandle.name of the subdirectory you wish to retrieve.
// options: (Optional, object) with the following properties:
//   create: (Boolean, optional) Default false. When set to true if the file is not found, one with the specified name will be created and returned.
// Returns: (Promise, fulfilled with FileSystemDirectoryHandle) a subdirectory with the specified name within the directory handle on which the method is called.
FileSystemDirectoryHandle.getDirectoryHandle() {
}

// Returns: (async iterator) containing the keys for each item in FileSystemDirectoryHandle.
FileSystemDirectoryHandle.keys() {
}

// Attempts to asynchronously remove an entry if the directory handle contains a file or directory called the name specified.
// name: (String) representing the FileSystemHandle.name of the entry you wish to remove.
// options: (Optional, object) containing options, which are as follows:
//   recursive: (Boolean) defaults to false. When set to true entries will be removed recursively.
// Return: (Promise, resolves with undefined)
FileSystemDirectoryHandle.removeEntry() {
}

// Returns a Promise fulfilled with an Array of directory names from the parent handle to the specified child entry, with the name of the child entry as the last array item.
FileSystemDirectoryHandle.resolve() {
}

//  Returns a new async iterator containing the values for each index in the FileSystemDirectoryHandle object.
FileSystemDirectoryHandle.values() {
}

//  Returns the entries function by default.
FileSystemDirectoryHandle[@@asyncIterator]() {
}
