function label_create(tagname,attr1,attrval1,content)
{
    var ele = document.createElement(tagname)
    ele.setAttribute(attr1, attrval1)
    ele.innerHTML = content
    return ele;
}

function break_create()
{
    var break_ele = document.createElement("br")
    return break_ele
}
 function input_create(tagname,attr1,attrval1,idname)
 {
    var input_ele =document.createElement(tagname)
    input_ele.setAttribute(attr1,attrval1)
    input_ele.className = "main"
    input_ele.id = idname
    return input_ele
 }

 function button_create(tagname,attr1,attrval1,attr2,attrval2,attrn,attrvaln)
 {
    var button_ele =document.createElement(tagname)
    button_ele.setAttribute(attr1,attrval1)
    button_ele.setAttribute(attr2,attrval2)
    button_ele.setAttribute(attrn,attrvaln)
    return button_ele;
 }

 function foo()
 {
     let fname = document.getElementById("fname").value;
     console.log(fname); 
     let mname = document.getElementById("mname").value;
     console.log(mname); 
     let lname = document.getElementById("lname").value;
     console.log(lname); 
     let email = document.getElementById("email").value;
     console.log(email); 
     let address = document.getElementById("address").value;
     console.log(address); 
 }
 var fname_ele = label_create("lable","for","fname","Firstname");
 var fname_break = break_create()
 let input_fname = input_create("input","type","text","fname")
 var input_fname_break = break_create()

 var mname_ele = label_create("lable","for","mname","Middlename");
 var mname_break = break_create()
 let input_mname = input_create("input","type","text","mname")
 var input_mname_break = break_create()

 var lname_ele = label_create("lable","for","lname","Lastname");
 var lname_break = break_create()
 let input_lname = input_create("input","type","text","lname")
 var input_lname_break = break_create()

 var email_ele = label_create("lable","for","email","Email");
 var lable_break = break_create()
 let input_email = input_create("input","type","email","email")
 var input_break = break_create()

 var password_ele = label_create("lable","for","textarea","Address");
 var pass_break = break_create()
 let input_pass = input_create("textarea","rows","cols",'address')
 var input_pas_break = break_create()

 
 let input_type_submit = button_create("input","type","submit","value","submit","onclick","foo()")
 var input_sub_break = break_create()


 document.body.append(fname_ele,fname_break,input_fname,input_fname_break,mname_ele,input_mname_break,input_mname,mname_break,lname_ele,lname_break,input_lname,input_lname_break,email_ele,lable_break,input_email,input_break,password_ele,pass_break,input_pass,input_pas_break,input_type_submit,input_sub_break)