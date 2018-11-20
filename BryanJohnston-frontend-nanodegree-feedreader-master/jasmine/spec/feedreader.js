/*
                                                                       \|||/
Bryan Johnston                                                         (o o)
10/14/18                                                         ,~oo0~~(_)~~0oo~,
"Feed Reader Testing" project		                                 |  |  |  |  |  |
Udacity Front-end Web Developer Nanodegreee                     |  |  |  |  |  |

 * feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });


    /* Test suite named "The menu"
     * Ensures the menu element is
     * hidden by default.
     */
    describe('the menu', function(){
        it('default menu hidden', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

      /* Ensures the menu changes
       * visibility when the menu icon is clicked.
       */

        it('menu visible/hidden on click', function(){

            /* visible */
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            /* hidden */
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite "Initial Entries"
     * Ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */

    describe('initial entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('entry exists', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Test suite "New Feed Selection"
    * Ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */

    describe('new feed selection', function(){
        let testFeed;

        beforeEach(function(done){
            loadFeed(0, function(){
                testFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('feeds are different', function(){
            expect($('.feed').html()).not.toBe(testFeed);
        });
    });

}());
