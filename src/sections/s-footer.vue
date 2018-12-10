<template>
	<footer class="footer">
		<div class="container">

			<div class="row py-5">

				<div class="col"></div>

				<div class="col">
					<ul class="nav nav-pills flex-column">
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
					</ul>
				</div>

				<div class="col">
					<ul class="nav nav-pills flex-column">
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
					</ul>
				</div>

				<div class="col">
					<ul class="nav nav-pills flex-column">
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">link</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="row bottom py-4">
				<div class="col">© {{$root.year+' '+$root.company}}. All rights reserved.</div>
				<div class="col text-right">
					<gora-logo style="height: 30px"/>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
    import GoraLogo from '../components/gora-logo'

    export default {
        name: 'SectionFooter',
        components: {
            GoraLogo
        }
    }
</script>