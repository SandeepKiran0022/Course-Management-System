var opn = require('opn');
const joi = require('joi')
var express = require('express');
var app=express();

var courses=["java","react"];

app.set('views','./views');
app.set('view engine','pug');

var last;

//total no of seats in the courses
var j_seat=10;
var j2_seat=10;
var flag1=0;
var flag2=0;

//sample joi validator

const validators = {
    'login': {
        'username': joi.string().required(),
        'password': joi.string().required()
    }
}

app.use(express.urlencoded({extended:true}))

app.get("/course",function(req,res)
{
    res.render("course",{c1:j_seat,c2:j2_seat});
})


app.post("/course",function(req,res){
    res.render("course",{c1:j_seat,c2:j2_seat});
})

app.post("/get_report",function(req,res){
    res.render("get_report",{c1:flag1,c2:flag2});
})

app.post("/delete_course",function(req,res){
    res.render("delete",{c1:j_seat,c2:j2_seat});
})

app.post("/delete_c1",function(req,res){
    if(j_seat!=10)
    res.render("c1",{c1:j_seat,f1:0});
    else
    res.render("course",{c1:j_seat,c2:j2_seat});
    flag1=0;
    j_seat+=1;
})

app.post("/delete_c2",function(req,res){
    if(j2_seat!=10)
    res.render("c2",{c2:j2_seat,f1:0});
    else
    res.render("course",{c1:j_seat,c2:j2_seat});
    flag2=0;
    j2_seat+=1;
})

app.post("/home",function(req,res){
    res.render("home",{c1:flag1,c2:flag2});
})


app.post("/course1",function(req,res){
    console.log(req.body);
    if(flag1==0)
    j_seat--;
    flag1=1;
    if(j_seat==10)
    res.render("course1",{course_reg:"Not registered"});
    else
    res.render("course1",{course_reg:"Registered already"});
    //res.render("course",{appName:courses});
})
app.post("/course2",function(req,res){
    console.log(req.body);
    if(flag2==0)
    j2_seat--;
    flag2=1;
    if(j2_seat==10)
    res.render("course2",{course_reg:"Not registered"});
    else
    res.render("course2",{course_reg:"Registered already"});
    //res.render("course",{appName:courses});
})
app.listen(3000);

//opening this end point
opn('http://localhost:3000/');

app.get('/',function(req,res){
    res.render('home');
})
