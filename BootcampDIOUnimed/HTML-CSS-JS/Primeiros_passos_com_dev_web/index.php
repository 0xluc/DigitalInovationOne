<!DOCTYPE html>
<html>
    <head>
        <title>My First PHP Wesbite!</title>
    </head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <style type="text/css">
        .linha{
            font-weight: bold;
            color: green;
            padding-left: 10px;
            line-height: 50px;
        }
    </style>
    <body>
        <?php
            for ($i=0; $i < 11; $i++) { 
                print("<span class=\"linha\"> Linha n° ". $i . "</span><br />");
            }
        ?>

        <script type="text/javascript">
            $(document).ready(function() {
                alert("Wohoo!");
            });
        </script>
    </body>
</html>