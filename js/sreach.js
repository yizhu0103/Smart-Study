/* document.addEventListener('DOMContentLoaded', function () {
    const subjectCh = document.getElementById('subjectCh');
    const listCh = document.getElementById('listCh');
    const subjectEn = document.getElementById('subjectEn');
    const listEn = document.getElementById('listEn');
    const subjectMa = document.getElementById('subjectMa');
    const listMath = document.getElementById('listMath');
    const subjectSe = document.getElementById('subjectSe');
    const listSe = document.getElementById('listSe');
    const subjectSo = document.getElementById('subjectSo');
    const listSo = document.getElementById('listSo');


    subjectCh.addEventListener('mouseenter', () => {
        listCh.style.display = 'flex';
    });

    subjectCh.addEventListener('mouseleave', () => {
        listCh.style.display = 'none';
    });

    subjectEn.addEventListener('mouseenter', () => {
        listEn.style.display = 'flex';
    });

    subjectEn.addEventListener('mouseleave', () => {
        listEn.style.display = 'none';
    });
    subjectMa.addEventListener('mouseenter', () => {
        listMath.style.display = 'flex';
    });

    subjectMa.addEventListener('mouseleave', () => {
        listMath.style.display = 'none';
    });
    subjectSe.addEventListener('mouseenter', () => {
        listSe.style.display = 'flex';
    });

    subjectSe.addEventListener('mouseleave', () => {
        listSe.style.display = 'none';
    });
    subjectSo.addEventListener('mouseenter', () => {
        listSo.style.display = 'flex';
    });

    subjectSo.addEventListener('mouseleave', () => {
        listSo.style.display = 'none';
    });

}); */

function inv() {
    var invantory = document.getElementById("invantory");
    var courseList = document.getElementById("courseList");
    var btn_c = document.getElementById("btn_c");
    var btn_b = document.getElementById("btn_b");

    invantory.style.display = "flex";
    courseList.style.display = "none";
    btn_c.style.backgroundColor = "var(--secondary-y-1)";
    btn_c.style.color = " var(--secondary-b-1)";
    btn_b.style.backgroundColor = "var(--primary-b-2)";
    btn_b.style.color = "var(--lesser-background-y-)";
    courseList.style.visibility = "visible";

}

function course() {
    var invantory = document.getElementById("invantory");
    var courseList = document.getElementById("courseList");

    invantory.style.display = "none";
    courseList.style.display = "flex";
    btn_c.style.backgroundColor = "var(--primary-b-2)";
    btn_c.style.color = "var(--lesser-background-y-)";
    btn_b.style.backgroundColor = "var(--secondary-y-1)";
    btn_b.style.color = "var(--secondary-b-1)";
    courseList.style.visibility = "visible";


}



