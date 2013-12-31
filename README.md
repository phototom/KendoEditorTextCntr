Plugin for Kendo Editor to Count Number of Characters entered.
======================

This project is to add a Kendo style plugin to Kendo's Editor to show how many characters have been entered into the editor.   Sample usage is

        <textarea id="editor" rows="10" cols="30" style="width: 400px; height: 440px"> 
            some 
        </textarea>
        <span id="editorCounter"></span>
        
        <textarea id="editor1" rows="10" cols="30" style="width: 400px; height: 440px" maxlength="1100" >
           More Text
        </textarea>
        <span id="editorCounter1"></span>
          
        <script>
          $(document).ready(function () {
                // create Editor from textarea HTML element with default set of tools
                $("#editor").kendoEditor();
                $("#editor1").kendoEditor();
                
                //  basic  usage, display only number characters entered.
                //  displayed text = "Characters Used: xxxx"
                $('#editorCounter').kendoextEditorTextCounter({
                    textAreaName: '#editor'
                });
                
                 //  get maximum number of characters from maxlength attribute in textarea element
                 // displayed text = "Characters Remaining: xxxx"
                $('#editorCounter1').kendoextEditorTextCounter({
                    textAreaName: '#editor1'
                });
          });
          

In file "index.html", you can see all options in use.
