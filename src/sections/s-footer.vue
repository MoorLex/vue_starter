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

			<div class="row border-top py-4">
				<div class="col">© 2018 {{$root.company}}. All rights reserved.</div>
				<div class="col"></div>
				<div class="col"></div>
			</div>
		</div>
	</footer>
</template>

<script>
    export default {
        name: 'SectionFooter'
    }
</script>