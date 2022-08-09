import { Injectable } from '@angular/core';
import { AccommodationTypeEnum } from 'src/app/enums/accommodation-type.enum';
import { AccommodationModel as AccommodationModel } from '../../../../models/accommodation.model';

@Injectable({
  providedIn: 'root'
})
export class AccommodationListService {

  private readonly accommodations: Set<AccommodationModel>;

  constructor() {
    this.accommodations = new Set<AccommodationModel>(
      [
        {
          id: "1c0a2708-5f22-4797-88bd-ab81d64e02b1",
          title: "Pozega Resort",
          subtitle: "Pozega Sport",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://njuskalo.blob.core.windows.net/njuskalo/93676/365375/img-1667582.jpg",
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "28536d76-65e3-4be1-b6e2-89d04a915582",
          title: "Best hotel in Zagreb",
          subtitle: "Zagreb Hilton",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://travelcroatia.live/wp-content/uploads/2021/08/doubletree_hilton_zagreb.jpg",
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "320716f5-2042-4310-9276-690fd8c7f1a3",
          title: "Ibis Resort since 1999",
          subtitle: "Zagreb Ibis",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Room,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/9c/49/4f/the-westin-zagreb-daytime.jpg?w=1200&h=-1&s=1",
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "51d94ae5-5ff5-4c08-8871-b3a811990584",
          title: "Zagreb Resort",
          subtitle: "Zagreb Sport",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/39/87/7b/hotel-sport.jpg?w=1200&h=-1&s=1",
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "5605f001-22a3-4b3b-9a9c-0eb54c8bedbf",
          title: "New Hotel in Center",
          subtitle: "Zagreb Inn",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max500/214277752.jpg?k=d02735b8d16255f7be13a430520315c500686a32dc1cbfb013927666f89f1718&o=&hp=1",
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "6e8b3eba-48ef-48a4-8631-7dd39839425e",
          title: "Mobile House Blue",
          subtitle: "mobile house Red",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.MobileHome,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/67108182.jpg?k=781ee2a3a2c00292c52aecb23276c716fcc4f096a8acc4b3ccc8ed30ef4e8c15&o=",
          freeCancelation: true,
          price: 100,
          locationID: "0f29d778-0592-43cb-a21c-a4aa6a4c7997"
        },
        {
          id: "83aff79b-4a25-4131-8a1f-a3ed581891e3",
          title: "Best hotel in Zagreb",
          subtitle: "Zagreb Hilton",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://m.vecernji.hr/media/img/1e/c1/8c6a7be051b3d87557aa.jpeg",
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "8822d26b-02cc-4882-8dbd-83406fb33260",
          title: "Pozega Resort since 1999",
          subtitle: "Pozega Resort",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://www.sunturist.com/wp-content/uploads/2020/01/img537308.jpeg",
          freeCancelation: true,
          price: 130,
          locationID: "e80b2420-69da-4426-83b5-9acdde15a32c"
        },
        {
          id: "b292d771-b78a-4e36-b889-ec783846b4c8",
          title: "Zagreb Resort since 1999",
          subtitle: "Zagreb Resort",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.Suite,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0e/94/2f/95/hotel-matija-gubec.jpg",
          freeCancelation: true,
          price: 130,
          locationID: "9544585e-bd71-4a15-9591-67ecc8374e5d"
        },
        {
          id: "ca41fcd0-2474-48e9-b908-2160841179e9",
          title: "Best Mobile House Inn",
          subtitle: "Best mobile house",
          description:
          `<p>Sed vitae augue ut orci scelerisque sollicitudin nec venenatis libero. Aliquam tincidunt eu ante non accumsan. In eget nisl ut mauris tempus ultrices ornare vel nulla. Integer viverra diam quis neque consequat, nec euismod arcu hendrerit. Quisque at mauris bibendum, pulvinar elit id, accumsan felis. Etiam pretium tempor mauris sed auctor. Quisque mollis orci vitae luctus dictum. Vestibulum consectetur accumsan porta. Proin vel felis tincidunt, dapibus neque tempus, aliquet odio. Sed nec felis erat. Suspendisse fringilla nibh et purus commodo euismod. Donec suscipit ligula urna, non pretium eros consectetur ac. Praesent sodales in odio vel finibus. Aenean metus lectus, condimentum in malesuada venenatis, ullamcorper quis diam. Sed luctus gravida tortor, ac mollis risus gravida vitae. Quisque porta rutrum velit.</p>
           <p>In pellentesque tellus ac lorem auctor, in elementum ante ultricies. Praesent eu porttitor mauris. Fusce quis erat ut libero mollis convallis id et ligula. Phasellus vel venenatis nibh. Nam lacinia erat sit amet rhoncus posuere. Etiam ultricies, tellus at congue malesuada, libero leo iaculis ex, id porta est felis at arcu. Aliquam sit amet massa accumsan, dapibus nisi et, convallis ipsum. Donec nec sem massa. Fusce felis nisi, gravida ac feugiat ac, auctor sed risus. Aenean viverra nunc et gravida tincidunt. Mauris id aliquam augue. Maecenas dapibus nec nunc vitae vulputate. Aliquam elementum semper lacinia.</p>
           <p>Suspendisse pretium semper pulvinar. Proin semper rutrum lorem et porttitor. Aliquam lacinia dolor in nisl pretium, non pulvinar nulla placerat. Praesent sit amet leo eget diam rhoncus facilisis a a ipsum. Sed nec mollis orci, id luctus libero. Mauris luctus, quam vitae volutpat suscipit, eros orci mollis felis, a tincidunt est mauris id diam. Pellentesque et ullamcorper sapien. Integer consectetur iaculis tellus a placerat. Donec ac metus non ipsum fringilla pretium quis porta enim. Quisque ligula erat, ullamcorper non scelerisque eget, lacinia vel nulla. Quisque maximus leo quis lacus posuere, ut finibus mi vulputate.</p>`,
          type: AccommodationTypeEnum.MobileHome,
          categorization: 3,
          personCount: 4,
          imageUrl: "https://www.private-apartments-croatia.com/img/object_photo/4269_2877/24.jpeg",
          freeCancelation: true,
          price: 100,
          locationID: "0f29d778-0592-43cb-a21c-a4aa6a4c7997"
        }
      ] as AccommodationModel[]
    );
  }

  get accommodationList() {
    return [...this.accommodations];
  }

  addAccommodations(...accommodations: AccommodationModel[]) {
    for (const accommodation of accommodations)
      this.accommodations.add(accommodation);
  }

  removeAccomodation(node: AccommodationModel) {
    this.accommodations.delete(node);
  }
}
