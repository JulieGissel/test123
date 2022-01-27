function imgThingShow()
{
    document.getElementById('imgDot1').style.display='flex';
    document.getElementById('dott1').classList.toggle('active')
    document.getElementById('dott2').classList.toggle('active')
}

function imgThingHide()
{
    document.getElementById('imgDot1').style.display='none';
    document.getElementById('dott2').classList.toggle('active')
    document.getElementById('dott1').classList.toggle('active')
}

function imgThingShow2()
{
    document.getElementById('imgDot2').style.display='flex';
    document.getElementById('dott3').classList.toggle('active')
    document.getElementById('dott4').classList.toggle('active')
}

function imgThingHide2()
{
    document.getElementById('imgDot2').style.display='none';
    document.getElementById('dott4').classList.toggle('active')
    document.getElementById('dott3').classList.toggle('active')
}

function tekFormShow1()
{
    if (document.getElementById('produktMisc1').style.display==='none')
    {
        document.getElementById('produktMisc1').style.display='flex';
        document.getElementById('tekForm1').classList.toggle('aktiv');
    }
    else
    {
        document.getElementById('produktMisc1').style.display='none';

    }

    if (document.getElementById('tekForm1').nextElementSibling.style.maxHeight)
    {
        document.getElementById('tekForm1').nextElementSibling.style.maxHeight = null;
    }
    else
    {
        document.getElementById('tekForm1').nextElementSibling.style.maxHeight = document.getElementById('tekForm1').nextElementSibling.scrollHeight + "px";
    } 
}

function tekFormShow2()
{
    if (document.getElementById('produktMisc2').style.display==='none')
    {
        document.getElementById('produktMisc2').style.display='flex';
        document.getElementById('tekForm2').classList.toggle('aktiv');
    }
    else
    {
        document.getElementById('produktMisc2').style.display='none';

    }

    if (document.getElementById('tekForm2').nextElementSibling.style.maxHeight)
    {
        document.getElementById('tekForm2').nextElementSibling.style.maxHeight = null;
    }
    else
    {
        document.getElementById('tekForm2').nextElementSibling.style.maxHeight = document.getElementById('tekForm2').nextElementSibling.scrollHeight + "px";
    } 
}

function footerMiscShow1()
{
    if (document.getElementById('info').style.display==='none')
    {
        document.getElementById('info').style.display='flex';
        document.getElementById('infoh').classList.toggle('aktiv');
    }
    else
    {
        document.getElementById('info').style.display='none';

    }

    if (document.getElementById('infoh').nextElementSibling.style.maxHeight)
    {
        document.getElementById('infoh').nextElementSibling.style.maxHeight = null;
    }
    else
    {
        document.getElementById('infoh').nextElementSibling.style.maxHeight = document.getElementById('tekForm1').nextElementSibling.scrollHeight + "px";
    } 
}

function footerMiscShow2()
{
    if (document.getElementById('mem').style.display==='none')
    {
        document.getElementById('mem').style.display='flex';
        document.getElementById('memh').classList.toggle('aktiv');
    }
    else
    {
        document.getElementById('mem').style.display='none';

    }

    if (document.getElementById('memh').nextElementSibling.style.maxHeight)
    {
        document.getElementById('memh').nextElementSibling.style.maxHeight = null;
    }
    else
    {
        document.getElementById('memh').nextElementSibling.style.maxHeight = document.getElementById('tekForm1').nextElementSibling.scrollHeight + "px";
    } 
}

function footerMiscShow3()
{
    if (document.getElementById('social').style.display==='none')
    {
        document.getElementById('social').style.display='flex';
        document.getElementById('socialh').classList.toggle('aktiv');
    }
    else
    {
        document.getElementById('social').style.display='none';

    }

    if (document.getElementById('socialh').nextElementSibling.style.maxHeight)
    {
        document.getElementById('socialh').nextElementSibling.style.maxHeight = null;
    }
    else
    {
        document.getElementById('socialh').nextElementSibling.style.maxHeight = document.getElementById('tekForm1').nextElementSibling.scrollHeight + "px";
    } 
}

function footerMiscShow4()
{
    if (document.getElementById('nyhedP').style.display==='none')
    {
        document.getElementById('nyhedP').style.display='flex';
        document.getElementById('nyhedh').classList.toggle('aktiv');
    }
    else
    {
        document.getElementById('nyhedP').style.display='none';

    }

    if (document.getElementById('nyhedh').nextElementSibling.style.maxHeight)
    {
        document.getElementById('nyhedh').nextElementSibling.style.maxHeight = null;
    }
    else
    {
        document.getElementById('nyhedh').nextElementSibling.style.maxHeight = document.getElementById('tekForm1').nextElementSibling.scrollHeight + "px";
    } 
}

function tilTopsScroll()
{
    if (document.documentElement.scrollTop > 50 && window.matchMedia('(min-width: 600px)').matches)
    {
        document.getElementById('tilTopsKnap').style.display='block';
    }
    else
    {
        document.getElementById('tilTopsKnap').style.display='none';
    }
}

function tilTops()
{
    document.documentElement.scrollTop = 0;
}

window.onscroll = function()
{
    tilTopsScroll()
}