// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function scrollIntoView(eleID) {
  var e = document.getElementById(eleID);
  if (!!e && e.scrollIntoView) {
      e.scrollIntoView();
  }
}

// do your things
console.log("trying to find the best answer");

var spans = document.getElementsByTagName("span");
var found = false
for(i=0;i<spans.length;i++)
{
  if (spans[i].innerText == "accepted")
  {
    spans[i].parentElement.parentElement.parentElement.scrollIntoView();
    window.scrollBy(0,-100)
    found = true
  }
}

if (found == false)
{
  console.log("not found, finding the answer section");
  var answers = document.getElementById("answers");
  answers.scrollIntoView();
}
else{
  console.log("found");
  
}