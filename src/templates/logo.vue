<template>
    <div class="ww-logo">
        <span>With <strong>♥</strong> by</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20.58mm" width="38.33mm" viewBox="0 0 135.81433 72.92572" style="height: 20px">
            <path id="w1" d="m50.11 72.78-12.99-32.37-15.15 32.52-21.97-56.79h12.62l10.76 31.62 8.314-20.86-4.306-10.76h10.69l12.25 30.36 9.279-30.36h11.58l-21.08 56.64z"/>
            <path id="w2" d="m114.7 0.1485-13 32.36-15.1-32.51l-21.97 56.79h12.62l10.76-31.62 8.314 20.86-4.306 10.76h10.69l12.25-30.36 9.279 30.36h11.58l-21.08-56.64z"/>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
    .ww-logo{
        cursor: pointer;
        display: inline-block;
        text-decoration: none;
        color: fade_out(#fff, .7);

        &:hover{
            color: fade_out(#fff, .2);
            
            span strong{
                color: #de8262;
            }

            svg path{
                fill: fade_out(#fff, .2);
            }
        }

        span{
            font-size: 14px;
            transition: .3s;
            
            strong{
                transition: .3s;
                font-weight: normal;
            }
        }

        svg{
            width: auto;
            height: 100px;
            max-height: 100%;
            display: inline-block;

            path{
                transition: .3s;
                fill: fade_out(#fff, .7);
            }
        }
    }
</style>

<script>
    export default {
        name: 'GoraLogo'
    }
</script>
